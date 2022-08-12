const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const uploadNewFile = (fileData) => {
    try {
        DB.files.push(fileData);
        saveToDatabase(DB);
        return {
            publicKey: fileData.publickey,
            privateKey: fileData.privatekey
        }
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };
    }
};

const downloadFile = (publicKey) => {
    try {
        const fileData = DB.files.find((file) => file.publickey === publicKey);
        if (!fileData) {
            throw {
                status: 400,
                message: `Can't find file with public key '${publicKey}'`
            }
        }

        const indexForUpdate = DB.files.findIndex((file) => file.publickey === publicKey);
        const updatedFileData = {
            ...DB.files[indexForUpdate],
            updatedat: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        };
        DB.files[indexForUpdate] = updatedFileData;
        saveToDatabase(DB);

        const filePath = fileData.path;
        return { filePath }
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };
    }
};

const deleteFile = (fileData) => {
    try {
        // delete the file from storage
        // update the DB
        // return the file removal status
        return {
            fileRemoved: true
        }
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };
    }
};

module.exports = {
    uploadNewFile,
    downloadFile,
    deleteFile,
};