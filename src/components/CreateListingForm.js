import React from "react";

export const CreateListingForm = ({
    listingName,
    setListingName,
    listingType,
    setListingType,
    imageUrl,
    setImageUrl,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="listingName">Tool or Workspace Name: </label>
                <input required id="listingName" name="listingName" type="text" onChange={(e) => setListingName(e.target.value)} value={listingName} />


                <p>Listing Type:</p>
                <input id="workspace" name="listingType" type="radio" onChange={(e) => setListingType(e.target.value)} value="Workspace" />
                <label htmlFor="workspace">Workspace</label>

                <input id="tool" name="listingType" type="radio" onChange={(e) => setListingName(e.target.value)} value="Tool" />
                <label htmlFor="tool">Tool</label>
                <br /><br />


                <label htmlFor="imageUrl">Image Url:</label>
                <input type="text" name="imageUrl" id="imageUrl" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />
                <br /><br />


                <button id="submit" value="SUBMIT">Submit</button>

            </form>
        </>
    );
};

export default CreateListingForm;