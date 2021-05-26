# List of all changes

## What's new in js-bdms 1.0.9

### New functions

Added the new copy borehole function:

 - **copyBorehole(id borehole, id workgroup)**:
   
   Copy an existing borehole into the given workgroup (editor users only).

Export / Import functions:

 - **exportDatabase(id? workgroup)**:
   
   Execute a full geopackage export of the database or filtered by workgroup.

 - **exportDatabaseById([ids] boreholes)**:
   
   Execute a geopackage export of the database based on an array of borehole id.

 - **importDatabaseWorkgroup(id workgroup)**:
   
   Import an exported database into an existing workgroup for editing.

 - **importDatabaseSupplier(id workgroup)**:
   
   Import an exported database into an supplier (read only) workgroup.

 - **importDatabaseNewSupplier(id workgroup)**:
   
   Import an exported database into an new supplier (read only) workgroup, created on the fly.

User reload:

 - **reloadUser**:

   Reload the current user configurations.

Workgroups / Suppliers:

 - **listSuppliers**:

   Get the list of suppliers only.

## What's new in js-bdms 1.0.8

### New functions

Added login screen text management REST API implementation:

 - **publishContent()**:
   
   Promote the draft of the login screen text to go public (admin users only).

 - **getContent()**:
   
   Get the current of the *login screen text*.

 - **getContentDraft()**:
   
   Get the current draft of the *login screen text* (admin users only).
   
 - **draftContent()**:
   
   Update the current draft of the *login screen text* (admin users only).

### Function changes

 - **createIdentifier(identifiers)**

   Create a new identifier for each language

 - **updateIdentifier(id identifiers)**

   Update the identifier for each language


## What's new in js-bdms 1.0.7

### New functions

Added new service-bdms related new REST API implementation:

 - **publishTerms()**:
   
   Promote the draft of *terms of service* to go public (admin users only).

 - **getTerms()**:
   
   Get the current *terms of service*.

 - **getTermsDraft()**:
   
   Get the current draft *terms of service* (admin users only).

 - **draftTerms(terms)**:
   
   Admins can update the current *terms of service* flagging it
   as *draft* (admin users only).

 - **acceptTerms(idTes)**:
   
   The user accepts the current *terms of service* of service 

 - **getBoreholeFiles(id)**:
   
   fetch the list of files attached to a borehole by its id (for VIEWERs)

 - **getEditorBoreholeFiles(id)**:
   
   fetch the list of files attached to a borehole by its id (for EDITORs)

 - **uploadBoreholeAttachment(id, file)**:
   
   upload and attach a new file to the given borehole id

 - **detachFile(id, file_id)**:
   
   detach a file from a borehole.

 - **patchFile(bid, fid, field, value)**:
   
   Update files extra attribute (description, visibility).

 - **downloadAttachment(params)**:
   
   Execute the download of borehole attachments.

### Function changes

- **patchSettings(tree, value, key=null)**:
   
   To handle guest user, when settings patch is launched, only local state
   is updated.

#### Backwards incompatible changes REST API:

 - uploadBoreholeList became importBoreholeList and the *action* attribute
   **UPLOAD** became **IMPORTCSV**