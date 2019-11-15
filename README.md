PowerApps is an enterprise service that lets you connect, create, and share business apps with your team in minutes and help to build highly tailored application with optimize user experience. You can expedite the business solution with Power Apps as well as SharePoint Online.

Problem Statement 
We are creating a solution for audit department. Audit department need to main the reports as well as reference document during audit.
Blueprint approach
Let’s gets start, how we can design and implement such problem statement in optimize way.

 
Solution Approach
1.	Create Library to store content and List or Library to store all reference documents.
2.	Design SPFx extension solution to deploy at specific library, which will call Modal Dialog with Iframe.
3.	Design Power Apps form calls the same from Modal Dialog with Iframe section. 
4.	PowerApps form then saves the data into SharePoint Online List or Library.
