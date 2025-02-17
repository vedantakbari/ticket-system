@echo off
cd /d %~dp0
echo Pushing latest changes to GitHub...

git add .
git commit -m "Auto commit - latest changes"
git push origin master

echo Done! Changes pushed successfully.
pause
