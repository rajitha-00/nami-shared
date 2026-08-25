import React, { useState, useEffect, useRef, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
}) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x, y });

  // Calculate smart bounds to avoid overflowing screen boundaries
  useEffect(() => {
    if (!open) {
      setHighlightedIndex(-1);
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
            backgroundColor: '#11151e',
            backdropFilter: 'blur(24px) saturate(1.6)',
            WebkitBackdropFilter: 'blur(24px) saturate(1.6)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 12,
            padding: 5,
            minWidth: 210,
            maxWidth: 280,
            boxShadow:
              '0 20px 48px -10px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 0.5px 0 rgba(255, 255, 255, 0.12)',
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
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
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
                      ? 'rgba(255, 255, 255, 0.25)'
                      : item.danger
                      ? '#FF453A'
                      : '#FFFFFF',
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
                        ? 'rgba(255, 69, 58, 0.18)'
                        : 'rgba(255, 255, 255, 0.1)',
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
                          color: isHighlighted
                            ? 'rgba(255, 255, 255, 0.65)'
                            : 'rgba(255, 255, 255, 0.35)',
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
                          color: isHighlighted
                            ? 'rgba(255, 255, 255, 0.7)'
                            : 'rgba(255, 255, 255, 0.3)',
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
                        backgroundColor: '#11151e',
                        backdropFilter: 'blur(24px) saturate(1.6)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 12,
                        padding: 5,
                        minWidth: 180,
                        boxShadow: '0 20px 48px -10px rgba(0, 0, 0, 0.55)',
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
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                margin: '4px 6px',
                              }}
                            />
                          );
                        }
                        return (
                          <div
                            key={sub.key || sub.label || `sub-${subIdx}`}
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
                                ? 'rgba(255, 255, 255, 0.25)'
                                : sub.danger
                                ? '#FF453A'
                                : '#FFFFFF',
                              gap: 12,
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              {sub.icon && <span>{sub.icon}</span>}
                              <span>{sub.label}</span>
                            </div>
                            {sub.shortcut && (
                              <span
                                style={{
                                  fontSize: '11px',
                                  color: 'rgba(255, 255, 255, 0.35)',
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
