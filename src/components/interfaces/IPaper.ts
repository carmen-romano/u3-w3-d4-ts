export interface Welcome {
    count: number;
    next: string | null; 
    previous: string | null;
    results: Result[];
}

export interface Result {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: NewsSite;
    summary: string;
    published_at: Date;
    updated_at: Date;
    featured: boolean;
    launches: Launch[];
    events: []; 
}

export interface Launch {
    launch_id: string;
    provider: string;
}

export enum NewsSite {
    SpaceNews = "SpaceNews",
    Teslarati = "Teslarati",
}