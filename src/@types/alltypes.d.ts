declare type UserProfile = {

    firstName?: string;
    lastName?: string;
    nickname?:string;
    email?: string;
    is_email_verified?: boolean;
    mobile_number?: string;
    is_mobile_number_verified?: boolean;
    country_code2?: string;
    calling_code?: string;
    locale?: string;
    avatar: string;
    currency_code?: string;
    company_relation?: string;
    kyc_status?: string;
    kyc_provider_id?: string;
    auth0_id?: string;
    company?:any;
    
}

declare type CompanyProfile = {

    name:string,
    representative_name:string,
    representative_lastname:string,
    representative_email?:string,
    stellar_public_key:string,
    payment_identifier:string,
    registration_number:string,
    registration_date:string,
    registration_country:string,
    registration_province:string,
    registration_city:string,
    registration_postal_code:string,
    registration_street:string,
    registration_house_number:string,
    phone:string,
    email:string,
    legal_form:string,
    account_type:string,
    user:UserProfile

}


declare type Auth0Profile = {

    nickname:string;
    name:string;
    picture:string;
    updated_at:string;
    email:string;
    email_verified:boolean;
    sub:string;
    given_name:string;
    family_name:string;

}

declare type Asset = {
    name:string,
    code:string,
    symbol:string,
    home_domain:string,
    icon:string,
    identifier:string,
    type:string,
    issuer_name:string,
    description:string;
}

declare type AnchorTransactionHistoryOptions = {
    asset_code:string;
    no_older_than?:Date;
    limit?:number;
    kind?:string;
    paging_id?:string;
}

declare type AnchorPayment = {

    id:string;
    kind: string;
    status:string;
    status_eta?:number;
    kyc_verified?:boolean;
    more_info_url:string;
    amount_in:string;
    amount_out:string;
    amount_fee:string;
    started_at:Date;
    completed_at:Date;
    stellar_transaction_id:string;
    external_transaction_id?:string;
    message?:string;
    refunded:boolean;
    deposit_memo?:string;
    deposit_memo_type?:string;
    from:string;
    to:string;
    withdraw_anchor_account?:string;
    withdraw_memo?:string;
    withdraw_memo_type?:string;
}




