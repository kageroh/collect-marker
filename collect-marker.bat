@echo off
setlocal
set OUTPUT=analyze.log
cscript //Nologo header.wsf > %OUTPUT%
rem for %%i in (..\txt\*.txt) do cscript //Nologo collect-marker.wsf "%%i" utf-8 >> %OUTPUT%
for %%i in (*.txt) do cscript //Nologo collect-marker.wsf "%%i" utf-8 >> %OUTPUT%
endlocal
echo on
