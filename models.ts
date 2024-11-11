export interface Plant {
    id: string;
    name: string;
    wateringFrequency: number; // in days
    lastWatered: string; // ISO date string
}
