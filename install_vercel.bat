@echo off
echo Installing Vercel CLI...
echo.

SET PATH=C:\Program Files\nodejs;%PATH%

npm install -g vercel

echo.
echo Vercel CLI installed successfully!
echo.
echo To deploy, run: vercel
echo.
pause
