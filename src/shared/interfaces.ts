import { Extension, MimeType, ResourceType } from './enums';

export interface IResourceMetadata {
    resource_type: ResourceType;
    public_id: string;
}

export interface IPictureLike {
    name: string;
    width: number;
    height: number;
    hash: string;
    ext: Extension;
    mime: MimeType;
    size: number;
    url: string;
    provider_metadata: IResourceMetadata;
}

export interface IPictureFormat extends IPictureLike {
    path: string;
}

export interface IPicture extends IPictureLike {
    id: number;
    alternativeText: string;
    caption: string;
    formats: IPictureFormats;
    url: string;
    previewUrl?: string;
    provider: string;
    created_at: Date;
    updated_at: Date;
}

export interface IPictureFormats {
    small?: IPictureFormat;
    medium?: IPictureFormat;
    large?: IPictureFormat;
    thumbnail?: IPictureFormat;
}