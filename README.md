# CCS Prototype Kit example

An example project on how can extend [GOV.UK Prototype Kit](https://github.com/alphagov/govuk-prototype-kit) using the CCS assets from [CCS-Frontend-Kit](https://github.com/Crown-Commercial-Service/CCS-Frontend-Kit).

This project uses the GOV.UK Prototype Kit as a base so view [GOV.UK Prototype Kit site](https://govuk-prototype-kit.herokuapp.com/docs) for more detailed documentation on how GOV.UK Prototype Kit works.

## How this project was created
This project was created with the following two steps:

1. Creating a clone the GOV.UK Prototype Kit at https://github.com/alphagov/govuk-prototype-kit

2. Run the `add_ccs_frontend_assets.sh` script

### The `add_ccs_frontend_assets.sh` script
This script was created by `@tim-s-ccs` with the idea that the process for adding the CCS assets should be repeatable.
The script goes through the following steps:
* Removing existing CCS assets (if they exists). This is to allow for the scenario where the CCS-Frontend-Kit has been updated and the assets changed, anything obsolete will be removed and anything new will be added.
* Install the `ccs-frontend-kit` package using `npm`
* Copy the following static CCS assets to the `app/assets` folder:
    * Images
    * Fonts
    * SVGs
* Import `styles.scss` into the existing `application.scss`. As the assets are compiled into the `public/` folder in a single file, we do not need to copy all stylesheet files into the main application as the import will take care of this for us.
* Import the JavaScript files and add them to the `app/views/includes/scripts.html` file so they are properly loaded in the application. Note, we do not import `JQuery` as it is already a part of the initial GOV.UK Prototype Kit project.

## Use of this project
This project is only meant to be an example of how we can use the CCS-Frontend-Kit with the GOV.UK Prototype Kit.
It will not be updated as GOV.UK Prototype Kit is updated so should not be used for building real prototypes.

To create a real CCS Prototype Kit, the following steps should be undertaken:
* Fork the [GOV.UK Prototype Kit](https://github.com/alphagov/govuk-prototype-kit)
* Add and run the `add_ccs_frontend_assets.sh` script to import the assets needed from [CCS-Frontend-Kit](https://github.com/Crown-Commercial-Service/CCS-Frontend-Kit)

By forking GOV.UK Prototype Kit (instead of cloning it like in this project), will make sure any changes made to the original repo can easily be fetched and merged to keep our toolkit up to date.
By running the script we will get all the CCS we need when developing new prototypes and can update these assets when necessary.

## Security
CCS is an advocate of responsible vulnerability disclosure. If you’ve found a vulnerability, we would like to know so we can fix it.

For full details on how to tell us about vulnerabilities, [see our security policy](https://www.crowncommercial.gov.uk/about-ccs/vulnerability-disclosure-policy).
