export interface DesignProject { 
    id: string;
    title: string;
    description: string;
    tools: string[];
    imageUrl: string;
    special?: boolean;
    short_sub: string;
    price: string;
}