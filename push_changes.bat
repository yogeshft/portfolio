@echo off
echo Configuring Git Identity...
git config --global user.email "jigardpatel03@gmail.com"
git config --global user.name "Yogesh Yadav"

echo.
echo Linking to GitHub repository...
rem Remove origin if it exists to avoid errors
git remote remove origin 2>nul
git remote add origin https://github.com/jigar081/Jigar03.git

echo.
echo Renaming branch to 'main'...
git branch -M main

echo.
echo Adding files...
git add .

echo.
echo Committing changes...
git commit -m "Final deployment fix and remote setup"

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo Done! Press any key to close.
pause
