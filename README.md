# Feature-scenarioTest branch
 Där har vi skrivit vår feature och våra scenarion som beskriver att som användare ska man kunna lägga till varor i varukorgen, kunna ändra på antalet av varje vara i varukorgen samt kunna radera varor från varukorgen. 
# Hot-fix branchen 
 Den är till för snabba hot fixes av produktionskoden.
# Feature-create-git-checkout-mini-server
 I den har vi skapat en checkout server för att automatisera och synka installations verktyg och skapa vägar för att autodeploya på vår dev branch.
# Dev branch
 Detta är vår default branch som vi pushar kod till från våra ovanstående branches. Därefter mergar vi in vår kod från dev till vår main branch. 
# CI - Continious Integration
 Vår CI innehåller våra tre tester dvs. unit tester, wdio tester samt api-tester. Testerna körs i en workflow fil i vår GitHub Actions. 
# CD - Continious Deployment
 Vi har skapat en server som checkar alla ändringar i vår produktionskod för att kunna gå live.