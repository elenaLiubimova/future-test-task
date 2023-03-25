import { ReactNode } from "react";

export type ChildrenType = {
  children: ReactNode;
}

export type Book = {
  accessInfo: {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
    };
    publicDomain: boolean;
    quoteSharingAllowed: false;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
  };
  etag: string;
  id: string;
  kind: string;
  saleInfo: {
    country: string;
    isEbook: boolean;
    saleability: string;
  };
  searchInfo: {
    textSnippet: string;
  };
  selfLink: string;
  volumeInfo: {
    allowAnonLogging: boolean;
    authors: string[]; //не всегда
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string; //не всегда
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    industryIdentifiers: { type: string; identifier: string }[]; //не всегда
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    }; //не всегда
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string; //не всегда
    readingModes: {
      image: boolean;
      text: false;
    };
    subtitle: string; //не всегда
    title: string;
  };
};