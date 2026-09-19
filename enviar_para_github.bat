@echo off
chcp 65001 > nul
echo =======================================================
echo    PUBLICAR NO GITHUB PARA GERAR O APK E O APP IOS
echo =======================================================
echo.
echo 1. Crie um novo repositório vazio em: https://github.com/new
echo    (Exemplo de nome: aprender-ingles)
echo.
echo 2. Cole aqui o link do repositório que o GitHub forneceu
echo    (Exemplo: https://github.com/SEU_USUARIO/aprender-ingles.git)
echo.
set /p REPO_URL="Cole o link do repositório e pressione ENTER: "

if "%REPO_URL%"=="" (
    echo Nenhum link fornecido. Operação cancelada.
    pause
    exit /b
)

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main
echo.
echo Enviando os ficheiros para o GitHub...
git push -u origin main

echo.
echo =======================================================
echo   SUCESSO! O PROCESSO DE COMPILAÇÃO NA NUVEM INICIOU!
echo =======================================================
echo.
echo Agora vá até a aba "Actions" no seu repositório no GitHub:
echo %REPO_URL%/actions
echo.
echo Em cerca de 2 minutos o seu APK estará pronto para download!
echo =======================================================
pause

