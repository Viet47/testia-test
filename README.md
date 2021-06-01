
## Before all

Run npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via Jest

Run `electron-packager . Testia Test --platform=win32 --arch=x86_64` to create a executable windows.

## Test EndToEnd

the e2e is only for localhost. you need to launch `npm run start`before running cypress.

Run `npm run cypress:open` start test e2e with screen 

Run `npm run cypress:open:headles` start test e2e with out screen, on headless.

there are a videos in cypress/videos.
