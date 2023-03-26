import { ReactNode } from 'react';

export type ChildrenType = {
  children: ReactNode;
};

export type Book = {
  accessInfo?: {
    accessViewStatus?: string;
    country?: string;
    embeddable?: boolean;
    epub?: {
      isAvailable?: boolean;
    };
    pdf?: {
      isAvailable?: boolean;
    };
    publicDomain?: boolean;
    quoteSharingAllowed?: false;
    textToSpeechPermission?: string;
    viewability?: string;
    webReaderLink?: string;
  };
  etag?: string;
  id?: string;
  kind?: string;
  saleInfo?: {
    country?: string;
    isEbook?: boolean;
    saleability?: string;
  };
  searchInfo?: {
    textSnippet?: string;
  };
  selfLink?: string;
  volumeInfo?: {
    allowAnonLogging?: boolean;
    authors?: string[];
    canonicalVolumeLink?: string;
    categories?: string[];
    contentVersion?: string;
    description?: string;
    imageLinks?: {
      extraLarge?: string;
      large?: string;
      medium?: string;
      small?: string;
      smallThumbnail?: string;
      thumbnail?: string;
    };
    industryIdentifiers?: { type: string; identifier: string }[];
    infoLink?: string;
    language?: string;
    maturityRating?: string;
    pageCount?: number;
    panelizationSummary?: {
      containsEpubBubbles?: boolean;
      containsImageBubbles?: boolean;
    };
    previewLink?: string;
    printType?: string;
    publishedDate?: string;
    publisher?: string;
    readingModes?: {
      image?: boolean;
      text?: false;
    };
    subtitle?: string;
    title?: string;
  };
};
