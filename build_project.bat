@echo off
SET "PATH=%PATH%;C:\Program Files\nodejs"
echo Building SpyHair for Production...
npm run build
echo.
echo Build Complete! The production files are in the 'dist' folder.
pause
