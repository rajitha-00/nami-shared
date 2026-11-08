import React, { useState, useEffect, useRef, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

export interface ContextMenuItem {
  key?: string;
  label?: string;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  separator?: boolean;
  onClick?: () => void;
  children?: ContextMenuItem[];
}

export interface ContextMenuProps {
  open: boolean;
  x: number;
  y: number;
  items: ContextMenuItem[];
  onClose: () => void;
  /**
   * Theme mode override. When omitted, dynamically adapts to the active MUI theme
   * mode (defaulting to 'light').
   */
  mode?: 'light' | 'dark';
}

const MENU_SPRING = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
  mass: 0.7,
};

const HIGHLIGHT_SPRING = {
  type: 'spring',
  stiffness: 500,
  damping: 35,
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
  open,
  x,
  y,
  items,
  onClose,
  mode,
}) => {
  const muiTheme = useTheme();
  const isDark = (mode ?? muiTheme?.palette?.mode) === 'dark';

  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [highlightedSubIndex, setHighlightedSubIndex] = useState<number>(-1);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x, y });

  // Calculate smart bounds to avoid overflowing screen boundaries
  useEffect(() => {
    if (!open) {
      setHighlightedIndex(-1);
      setHighlightedSubIndex(-1);
      setActiveSubmenu(null);
      return;
    }

    const estimatedWidth = 220;
    const estimatedHeight = items.length * 36 + 20;
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    let posX = x;
    let posY = y;

    if (posX + estimatedWidth > winWidth - 12) {
      posX = Math.max(12, posX - estimatedWidth);
    }
    if (posY + estimatedHeight > winHeight - 12) {
      posY = Math.max(12, winHeight - estimatedHeight - 12);
    }

    setPosition({ x: Math.max(12, posX), y: Math.max(12, posY) });
  }, [open, x, y, items]);

  // Click outside and Escape key handler
  useEffect(() => {
    if (!open) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleScroll = () => {
      onClose();
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { capture: true, passive: true });

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, [open, onClose]);

  const handleItemClick = useCallback(
    (item: ContextMenuItem) => {
      if (item.disabled || item.separator) return;
      if (item.children && item.children.length > 0) return;
      onClose();
      item.onClick?.();
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.9, y: -4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.1 } }}
          transition={MENU_SPRING}
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            zIndex: 999999,
            backgroundColor: isDark ? 'rgba(17, 21, 30, 0.94)' : 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(24px) saturate(1.6)',
            WebkitBackdropFilter: 'blur(24px) saturate(1.6)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: 12,
            padding: 5,
            minWidth: 210,
            maxWidth: 280,
            boxShadow: isDark
              ? '0 20px 48px -10px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 0.5px 0 rgba(255, 255, 255, 0.12)'
              : '0 16px 36px -6px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04), inset 0 0.5px 0 rgba(255, 255, 255, 0.8)',
            userSelect: 'none',
            outline: 'none',
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          {items.map((item, index) => {
            if (item.separator) {
              return (
                <div
                  key={`sep-${index}`}
                  style={{
                    height: 1,
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.07)',
                    margin: '4px 6px',
                  }}
                />
              );
            }

            const isHighlighted = highlightedIndex === index;
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isSubmenuOpen = activeSubmenu === item.label;

            return (
              <div
                key={item.key || item.label || `item-${index}`}
                style={{ position: 'relative' }}
                onMouseEnter={() => {
                  if (!item.disabled) {
                    setHighlightedIndex(index);
                    setHighlightedSubIndex(-1);
                    if (hasChildren && item.label) {
                      setActiveSubmenu(item.label);
                    } else {
                      setActiveSubmenu(null);
                    }
                  }
                }}
                onMouseLeave={() => {
                  if (!hasChildren) {
                    setHighlightedIndex(-1);
                  }
                }}
                onClick={() => handleItemClick(item)}
              >
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 10px',
                    borderRadius: 8,
                    cursor: item.disabled ? 'not-allowed' : 'pointer',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: item.disabled
                      ? (isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.28)')
                      : item.danger
                      ? (isDark ? '#FF453A' : '#FF3B30')
                      : (isDark ? '#FFFFFF' : '#1C1C1E'),
                    gap: 12,
                  }}
                >
                  {/* Item Highlight Indicator */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isHighlighted || isSubmenuOpen ? 1 : 0 }}
                    transition={HIGHLIGHT_SPRING}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 8,
                      backgroundColor: item.danger
                        ? (isDark ? 'rgba(255, 69, 58, 0.18)' : 'rgba(255, 59, 48, 0.10)')
                        : (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Left Side: Icon + Label */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.icon && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 16,
                          width: 16,
                          height: 16,
                          opacity: item.disabled ? 0.3 : 0.9,
                        }}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span>{item.label}</span>
                  </div>

                  {/* Right Side: Shortcut / Submenu Chevron */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    {item.shortcut && (
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          color: isDark
                            ? (isHighlighted ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.35)')
                            : (isHighlighted ? 'rgba(0, 0, 0, 0.65)' : 'rgba(0, 0, 0, 0.40)'),
                          letterSpacing: '0.04em',
                        }}
                      >
                        {item.shortcut}
                      </span>
                    )}

                    {hasChildren && (
                      <span
                        style={{
                          fontSize: '14px',
                          color: isDark
                            ? (isHighlighted ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.3)')
                            : (isHighlighted ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.35)'),
                        }}
                      >
                        ›
                      </span>
                    )}
                  </div>
                </div>

                {/* Submenu */}
                <AnimatePresence>
                  {hasChildren && isSubmenuOpen && item.children && (
                    <motion.div
                      initial={{ opacity: 0, x: -6, scale: 0.94 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -4, transition: { duration: 0.1 } }}
                      transition={MENU_SPRING}
                      style={{
                        position: 'absolute',
                        top: -4,
                        left: 'calc(100% + 4px)',
                        backgroundColor: isDark ? 'rgba(17, 21, 30, 0.94)' : 'rgba(255, 255, 255, 0.96)',
                        backdropFilter: 'blur(24px) saturate(1.6)',
                        WebkitBackdropFilter: 'blur(24px) saturate(1.6)',
                        border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                        borderRadius: 12,
                        padding: 5,
                        minWidth: 180,
                        boxShadow: isDark
                          ? '0 20px 48px -10px rgba(0, 0, 0, 0.55)'
                          : '0 16px 36px -6px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.06)',
                        zIndex: 1000000,
                      }}
                    >
                      {item.children.map((sub, subIdx) => {
                        if (sub.separator) {
                          return (
                            <div
                              key={`sub-sep-${subIdx}`}
                              style={{
                                height: 1,
                                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.07)',
                                margin: '4px 6px',
                              }}
                            />
                          );
                        }
                        const isSubHighlighted = highlightedSubIndex === subIdx;
                        return (
                          <div
                            key={sub.key || sub.label || `sub-${subIdx}`}
                            onMouseEnter={() => {
                              if (!sub.disabled) setHighlightedSubIndex(subIdx);
                            }}
                            onMouseLeave={() => setHighlightedSubIndex(-1)}
                            onClick={() => handleItemClick(sub)}
                            style={{
                              position: 'relative',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '6px 10px',
                              borderRadius: 8,
                              cursor: sub.disabled ? 'not-allowed' : 'pointer',
                              fontSize: '13px',
                              fontWeight: 500,
                              color: sub.disabled
                                ? (isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.28)')
                                : sub.danger
                                ? (isDark ? '#FF453A' : '#FF3B30')
                                : (isDark ? '#FFFFFF' : '#1C1C1E'),
                              gap: 12,
                            }}
                          >
                            <motion.div
                              initial={false}
                              animate={{ opacity: isSubHighlighted ? 1 : 0 }}
                              transition={HIGHLIGHT_SPRING}
                              style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: 8,
                                backgroundColor: sub.danger
                                  ? (isDark ? 'rgba(255, 69, 58, 0.18)' : 'rgba(255, 59, 48, 0.10)')
                                  : (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
                                pointerEvents: 'none',
                              }}
                            />
                            <div
                              style={{
                                position: 'relative',
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {sub.icon && (
                                <span
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 16,
                                    width: 16,
                                    height: 16,
                                    opacity: sub.disabled ? 0.3 : 0.9,
                                  }}
                                >
                                  {sub.icon}
                                </span>
                              )}
                              <span>{sub.label}</span>
                            </div>
                            {sub.shortcut && (
                              <span
                                style={{
                                  position: 'relative',
                                  zIndex: 1,
                                  fontSize: '11px',
                                  fontWeight: 600,
                                  fontFamily:
                                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                  color: isDark
                                    ? (isSubHighlighted ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.35)')
                                    : (isSubHighlighted ? 'rgba(0, 0, 0, 0.65)' : 'rgba(0, 0, 0, 0.40)'),
                                  letterSpacing: '0.04em',
                                }}
                              >
                                {sub.shortcut}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContextMenu;
