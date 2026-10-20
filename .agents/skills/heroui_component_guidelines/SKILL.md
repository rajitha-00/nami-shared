---
name: HeroUI Component & Layout Guidelines
description: Guidelines for building modern, responsive, and accessible UI components using HeroUI (formerly NextUI) following strict React component folder architecture.
---

# HeroUI Component & Layout Guidelines

Maintain high-end aesthetic quality, strict TypeScript typing, and architectural consistency across the application by adhering to HeroUI (formerly NextUI) design patterns and component guidelines.

---

## 1. Core Framework Principles

* **HeroUI over MUI**: All UI components must be built using HeroUI (`@heroui/react`) paired with Tailwind CSS for layout and custom micro-styling. Material-UI (MUI) is strictly prohibited.
* **Global Provider Setup**: Ensure the root application is wrapped with `HeroUIProvider` to enable default themes, toast notifications, animations, and dark mode transitions.
* **Component Imports**: Import components directly from `@heroui/react`:
  ```typescript
  import { Button, Card, CardBody, Chip, Modal, ModalContent, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
  ```

---

## 2. Feature Page Folder Integration

Every HeroUI-based feature module (e.g., `Bookings`, `Rooms`, `Guests`) must strictly adhere to the role-based subfolder structure:

```
src/features/Bookings/
├── components/         # Pure presentation components built with HeroUI primitives
│   ├── BookingStatusChip.tsx
│   ├── BookingDetailDrawer.tsx
│   └── index.ts
├── containers/         # HeroUI Context providers, wizard steps, composite wrappers
│   ├── BookingModalProvider.tsx
│   └── index.ts
├── hooks/              # Custom hooks managing HeroUI disclosures, table state, filters
│   ├── useBookingTable.ts
│   ├── useBookingModal.ts
│   └── index.ts
├── functions/          # Table column configurations and cell formatters
│   ├── getBookingColumns.tsx
│   └── index.ts
├── interfaces/         # Type definitions for tables, forms, and HeroUI slot props
│   ├── booking.interface.ts
│   └── index.ts
└── constants/          # HeroUI color mappings, status lookup configs, default form values
    ├── booking.constants.ts
    └── index.ts
```

---

## 3. HeroUI Slot Customization & Styling

HeroUI components support multi-slot customization via the `classNames` prop. Use Tailwind utility classes within component slots for pixel-perfect adjustments without breaking component accessibility or built-in animations.

* **Slot Customization Pattern**:
  ```typescript
  export const StatCard = ({ title, value, icon: Icon }: StatCardProps) => {
    return (
      <Card
        isHoverable
        classNames={{
          base: "bg-background/60 dark:bg-default-100/50 backdrop-blur-md border border-default-200/50 shadow-sm hover:shadow-md transition-all duration-300",
          body: "p-4 flex flex-row items-center justify-between gap-4",
        }}
      >
        <CardBody>
          <div>
            <p className="text-tiny uppercase font-semibold text-default-500 tracking-wider">{title}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
          </div>
          {Icon && (
            <div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary">
              <Icon className="w-6 h-6" />
            </div>
          )}
        </CardBody>
      </Card>
    );
  };
  ```

* **Color Variants & Semantic Chips**:
  Map domain statuses to HeroUI's standard color themes (`primary`, `secondary`, `success`, `warning`, `danger`, `default`) inside `constants/`:

  ```typescript
  // constants/booking.constants.ts
  import { ChipProps } from "@heroui/react";

  export const BOOKING_STATUS_COLOR_MAP: Record<string, ChipProps["color"]> = {
    CONFIRMED: "success",
    PENDING: "warning",
    CANCELLED: "danger",
    CHECKED_IN: "primary",
    CHECKED_OUT: "default",
  };
  ```

  ```typescript
  // components/BookingStatusChip.tsx
  import { Chip } from "@heroui/react";
  import { BOOKING_STATUS_COLOR_MAP } from "../constants";

  interface BookingStatusChipProps {
    status: string;
  }

  export const BookingStatusChip = ({ status }: BookingStatusChipProps) => {
    return (
      <Chip
        size="sm"
        variant="flat"
        color={BOOKING_STATUS_COLOR_MAP[status] || "default"}
        classNames={{
          base: "capitalize font-medium px-2.5 py-1",
          content: "text-xs font-semibold",
        }}
      >
        {status.replace("_", " ")}
      </Chip>
    );
  };
  ```

---

## 4. HeroUI Table Implementation Standards

Extract all table configurations to `functions/get[Feature]Columns.tsx`. Never inline column arrays inside view files.

### Column Configuration Rules:
1. Column setups must return an array of `IColumn<T>` objects, where `T` extends `ITableRow` (containing at least an `id` field).
2. Render functions inside columns must use HeroUI subcomponents (`Chip`, `User`, `Button`, `Dropdown`, `Tooltip`).

```typescript
// functions/getBookingColumns.tsx
import { ReactNode } from "react";
import { User, Tooltip, Button } from "@heroui/react";
import { BookingStatusChip } from "../components";

export interface ITableRow {
  id: string;
}

export interface IColumn<T extends ITableRow> {
  key: string;
  label: string;
  sortable?: boolean;
  align?: "start" | "center" | "end";
  render?: (row: T) => ReactNode;
}

export interface IBookingRow extends ITableRow {
  id: string;
  guestName: string;
  guestEmail: string;
  guestAvatar?: string;
  roomNumber: string;
  status: string;
  amount: number;
}

export const getBookingColumns = (
  onEdit: (booking: IBookingRow) => void,
  onDelete: (id: string) => void
): IColumn<IBookingRow>[] => [
  {
    key: "guest",
    label: "GUEST",
    sortable: true,
    render: (row) => (
      <User
        name={row.guestName}
        description={row.guestEmail}
        avatarProps={{ src: row.guestAvatar, radius: "lg", size: "sm" }}
      />
    ),
  },
  {
    key: "roomNumber",
    label: "ROOM",
    sortable: true,
    render: (row) => <span className="font-semibold text-default-700">#{row.roomNumber}</span>,
  },
  {
    key: "status",
    label: "STATUS",
    render: (row) => <BookingStatusChip status={row.status} />,
  },
  {
    key: "amount",
    label: "AMOUNT",
    align: "end",
    render: (row) => (
      <span className="font-mono font-medium text-default-900">
        ${row.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>
    ),
  },
  {
    key: "actions",
    label: "ACTIONS",
    align: "end",
    render: (row) => (
      <div className="flex items-center justify-end gap-2">
        <Tooltip content="Edit Booking">
          <Button isIconOnly size="sm" variant="light" onClick={() => onEdit(row)}>
            <span className="i-lucide-edit-3 w-4 h-4" />
          </Button>
        </Tooltip>
        <Tooltip content="Delete Booking" color="danger">
          <Button isIconOnly size="sm" variant="light" color="danger" onClick={() => onDelete(row.id)}>
            <span className="i-lucide-trash-2 w-4 h-4" />
          </Button>
        </Tooltip>
      </div>
    ),
  },
];
```

---

## 5. Modal & Overlay Management with HeroUI Hooks

Manage all modal, drawer, and popover states through HeroUI's `useDisclosure` hook inside custom hooks (`hooks/`).

```typescript
// hooks/useBookingModal.ts
import { useDisclosure } from "@heroui/react";
import { useState } from "react";
import { IBookingRow } from "../functions/getBookingColumns";

export const useBookingModal = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedBooking, setSelectedBooking] = useState<IBookingRow | null>(null);

  const handleOpenEdit = (booking: IBookingRow) => {
    setSelectedBooking(booking);
    onOpen();
  };

  const handleOpenCreate = () => {
    setSelectedBooking(null);
    onOpen();
  };

  return {
    isOpen,
    onOpenChange,
    onClose,
    selectedBooking,
    handleOpenEdit,
    handleOpenCreate,
  };
};
```

---

## 6. Form Controls & Input Standards

* Always leverage HeroUI form controls (`Input`, `Select`, `SelectItem`, `Textarea`, `Switch`, `Checkbox`).
* Use built-in props like `isInvalid`, `errorMessage`, `variant="bordered"`, `labelPlacement="outside"`, and `startContent`/`endContent` icons.

```typescript
// components/BookingFormDrawer.tsx
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select, SelectItem } from "@heroui/react";

export interface BookingFormDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (formData: Record<string, unknown>) => void;
  isLoading?: boolean;
}

export const BookingFormDrawer = ({
  isOpen,
  onOpenChange,
  onSubmit,
  isLoading = false,
}: BookingFormDrawerProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" scrollBehavior="inside">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-xl font-bold">
              New Reservation
            </ModalHeader>
            <ModalBody className="gap-4 py-4">
              <Input
                label="Guest Name"
                labelPlacement="outside"
                placeholder="Enter full name"
                variant="bordered"
                isRequired
              />
              <Select label="Room Type" labelPlacement="outside" variant="bordered" placeholder="Select room type">
                <SelectItem key="deluxe" value="deluxe">Deluxe Suite</SelectItem>
                <SelectItem key="executive" value="executive">Executive King</SelectItem>
                <SelectItem key="standard" value="standard">Standard Double</SelectItem>
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" color="default" onClick={onClose}>
                Cancel
              </Button>
              <Button color="primary" isLoading={isLoading} onClick={() => { onSubmit({}); onClose(); }}>
                Save Reservation
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
```

---

## 7. Strict Coding Rules

1. **Arrow Functions Only**: All HeroUI functional components and hooks must be defined using arrow function syntax.
2. **No `any` Types**: Strictly define interfaces for all HeroUI props, cell renderers, and selection handlers (`Selection`, `Key`).
3. **Barrel Exports**: Every subfolder (`components`, `containers`, `hooks`, `functions`, `interfaces`, `constants`) must include an `index.ts` file.
4. **HeroUI Slot Cleanliness**: Keep inline Tailwind strings clean; break complex slot objects into dedicated constant helpers or clean readable multi-line objects.
5. **No Unicode Emojis**: Never use raw unicode emojis in labels, selects, buttons, or chips. Always use formal SVG icon components (e.g. `lucide-react`).

