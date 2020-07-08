# List of all changes

## What's new in js-bdms 1.0.7

### New functions

Added new service-bdms related new REST API implementation:

 - **getBoreholeFiles(id)**:
   
   fetch the list of files attached to a borehole by its id (for VIEWERs)

 - **getEditorBoreholeFiles(id)**:
   
   fetch the list of files attached to  a borehole by its id (for EDITORs)

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