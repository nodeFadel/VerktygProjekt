# Instruktioner till en ny team medlem
 - Börja med att clona projektet från Github och öppna i Visual Studio Code.
 - Vid skapandet av en ny feature, ska det skapas en ny feature branch för att arbeta i.
 - När all produktionskod är fungerande ska en pull request skickas för att merga in det i dev branchen. Admin är den ende som kan acceptera pull requesten.
 - Dev branchen är vår default branch och main branchen är till för koden som är redo att gå live.
 - Man måste köra npm install för att kunna köra projektet och därefter npm start för att köra projektet.
 - Våra api tester skrivs i Postman och körs i Newman. Våra wdio tester körs med webdriverIO och unit testerna skrivs med jsdom.
 - Det är inte förens alla tester körs automatiskt och går igenom som man kan få ett projekt att autodeployas.

# Feature-scenarioTest branch
 Där har vi skrivit vår feature och våra scenarion som beskriver att som användare ska man kunna lägga till varor i varukorgen, kunna ändra på antalet av varje vara i varukorgen samt kunna radera varor från varukorgen. 
# Hot-fix branchen 
 Den är till för snabba hot fixes av produktionskoden.
# Create-git-checkout-mini-server
 I den har vi skapat en checkout server för att automatisera och synka installations verktyg.
# Dev branch
 Detta är vår default branch som vi pushar kod till från våra ovanstående branches. Därefter skickar vi pull request för att sedan kunna merga in vår kod från dev branchen till vår main branch. 
# CI - Continious Integration
 Vår CI innehåller våra tre tester dvs. unit tester, wdio tester samt api-tester. Testerna körs i en workflow fil i vår GitHub Actions. 
# CD - Continious Deployment
 Vi har skapat en server som automatiskt checkar alla ändringar i vår produktionskod för att kunna gå live.