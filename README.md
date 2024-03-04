# Js-Training




==========================
==========================
The Twelve Factor App: 
==========================
==========================

- Methodology for the building the software as the service app.
- can be applied to programs that are written in programming languages and which use any combination of backend service.
- 

==============================================================================
1. Codebase: One codebase tracked in rivision control and many deploys.
==============================================================================


-- There is only one codebase for each app and if there are more than one codebase for the application then it is categorised as the Distributed system in which each component is an application and each can comply with the 12 factors.

-- Also multiple applications should not share the same codebase.

-- For a single codebase there are multiple deploys. A deploy can be understood as a running instance of the application. This is typically the production site and one or more staging site.

-- Also each of developer has a copy of the codebase in their local system which can also be qualified as a deplooy.

-- The codebase is the same across all the deploys although different versions are available for the same. 


==============================================================================
2. Dependencies: Declre Explicitly and Isolate Dependencies:
==============================================================================

-- Libraries installed in the system through a packaging system can be globally scoped i.e. Site Packaging or can be locally scoped i.e. vendoring/ bundling.

-- Dependency Declaration: declares all the dependencies completely and exactly via dependency declaration manifest. 

-- Dependency Isolation: The porgramming language uses the dependency iolation in order to ensure that there are no leak ins i.e. no implicit depencies from the surrounding system.

-- Eg. In python, there are 2 spearate tools for dependency declaration and  dependency isolation i.e. Pip for dependency isolation and Virtualenv for dependency isolation.

==============================================================================
3. Config: Store config in the environment:
==============================================================================

-- The Config specifies the current version of the application as well as the current version of the dependencies. Te config is everything that is likely to vary between deploys.

-- App sometimes store the config as the constants in the code but it is a complete violation of the 12 Factor Apps.

-- A litmus test for wether an app has all the config correctly factored is whether the code can made public at ny moment without the loss of the credentials

-- The 12 factor app stores the config in environment variables which are easy to change between the deploys without changing any code.

==============================================================================
4. Backing services:Treat backing services as attached resources
==============================================================================

-- A backing service can be easily defined as the service that the application uses in order to use the application and add features to the application from a third party repository over the  network. 

-- The backing service allows us to use the service that is being developed by someone else in our application that adds an additional functionality to the application.

-- Eg. using a local database in the development of an aplication and then in porduction the database can be easily replaced by just the change of the link and the database credentials.

==============================================================================
5. Build Run Release:Separate the built and run stages
==============================================================================

-- The development of the application must be properly separated from the other 3 non-development phases of the aplpicaiton. 

-- Build Phase: comprises of the compilation of the codewhich in the end generates the artifact.

-- Release Phase: The release phase takes the artifact and attahces the configurations for a particular environment.

-- Run Phase: includes running the instance of the application.

==============================================================================
6. Process: Execute the application as one or more stateless prcesses: 
==============================================================================

-- An application is said to follow the princliple of Porcess if the instance of the application can be created and deleted at any instance of time, without disturbing the overall functionality of the application. 

-- The application must store any type of the data generated by it in any persistent data store along with constantly updating the data in the temporary storage.

-- Sticky Sessions: refers to catchign the logged in-user's sssion data in the local memory of the process and then directing each subsequent request from the particular user to the same process.


==============================================================================
7. Port Binding: Export Services via port binding: 
==============================================================================

-- Any application that follows the principle is completely self contained and standalone. 

-- the application binds itself to a particular port and listens to all the request on that port to return a response.

-- The information that to which port our service will be listening to is also stored in the configuration file.


==============================================================================
8. Concurrency: Scale out via the Process Model: 
==============================================================================

--as per the following principle, the application must be devided into the smaller application instead of designing a large application and each process must be able to start, temrinate and replicate independently at any time. 

--  It allows scaling our application easily. 

-- by scaling out we mean horizontal scaling of the application in which we run the multiple instance of the process.

==============================================================================
9. Disposability: Maximize the robustness with fast startup and shutdown: 
==============================================================================

-- Robustness of an application refers to the fact the application must be able to run the processes and all the processes must be able to run the processes independently.

-- the working / starting / closing of a process must not affect the working of any other process.

-- The process in the application must start quickly whenever required.

==============================================================================
10. Development/Production Parity: Keep Development, Staging and production as similar as possible
==============================================================================

-- According to this the development and the production environment msut be as same as possible i.e. the technologies used and the porcess being used must be as same as possible.

-- this helps in a way that if any error occurs on the code then it will occur only at the production stage and will not magically occur on the production line. 

--This helps to reduce the production as well as the debugging time.

==============================================================================
11. Logs: Treat Logs as Event Streams: 
==============================================================================

-- Logs can be defined as the breif description of the internal running processes within the application as well as the errors.

-- Logs allow us to have an idea of the functioning of the application and what porcesses are running at what point within the application.

-- Logs of an applicationa re stored  in a file called the Logfile.

==============================================================================
12. AdminProcess: Run Admin/ Management Tasks as one-off task: 
==============================================================================

-- The process formation is the array of processes that are used to do the app’s regular business (such as handling web requests) as it runs. Separately, developers will often wish to do one-off administrative or maintenance tasks for the app.

-- Admin code must shift with the application code to prevent the sync issues




==========================
==========================
Atomic Design: 
==========================
==========================

-- Principle of Atomic Design: 
the principle consists of 5 separate steps: 
- Atoms
- molecules
- Organisms
- Templates
- Pages

==============
Atoms: 
==============
Atoms are the most basic components that are used to build the UI's such as buttons, shapes, icons, text feilds, text labels.

==============
Molecules
==============
 
- These can be defined as the group of atoms bound together to be the smallest funcdamental unit.
- Molecule can be created by combining 2 or more atoms.
- Eg. an input feild and a button can be combined to form a form.

==============
Organisms:
==============

- Organisms can be classsified as the combination of molecules i.e. made by combining 2 or more molcules.

Eg. forming of more complex UI's using the molecular compenents such as the login page.


==============
Templates
==============

- Templates can be defined as the combination of organims and indivisuals to create the complete design.

- multiple templates can be used to form a interface design.



==============
Page
==============

- Pages are the highest level of fidelity. Most indivisuals spend their time on pages.

- It is the pages section that is used to test the system's efficiency.
- By seeing the end result on the page we can tweak the atoms, molecules and organisms as well as templates.