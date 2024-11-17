
type SwiperElement = {
    ImageUrl: string;
    Title: string;
    Subtitle: string;
}

export type APIResponse = {
    Details: Array<SwiperElement>;
}

export type ContactFormInput = {
    FullName: string;
    EmailAddress: string;
    PhoneNumbers: Array<string>;
    Message: string;
    bIncludeAddressDetails: boolean;
    AddressDetails: AddressDetails;
};

export type AddressDetails = {
    AddressLine1: string;
    AddressLine2: string;
    CityTown: string;
    StateCounty: string;
    Postcode: string;
    Country: string;
};

export type ErrorResponse = {
    Status: string;
    Error: Array<ErrorItem>;
}

type ErrorItem = {
    FieldName: string;
    MessageCode: string;
};