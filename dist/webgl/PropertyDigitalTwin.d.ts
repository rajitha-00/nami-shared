import React from 'react';
export interface RoomUnit3D {
    id: string;
    roomNumber: string;
    floor: number;
    status: 'available' | 'occupied' | 'reserved' | 'cleaning';
    guestName?: string;
}
export interface PropertyDigitalTwinProps {
    rooms: RoomUnit3D[];
    title?: string;
    subtitle?: string;
    height?: number | string;
    fallback?: React.ReactNode;
}
/**
 * PropertyDigitalTwin
 *
 * 3D Real-Time Spatial Overview of Property Floors & Room Blocks.
 * Features 3D stacked floor plates with micro-block room units.
 */
export declare function PropertyDigitalTwin({ rooms, title, subtitle, height, fallback, }: PropertyDigitalTwinProps): React.JSX.Element;
