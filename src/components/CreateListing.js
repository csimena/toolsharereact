import React, { useState } from 'react';
import styles from '../css/SignUp.module.css';
import listingData from '../listingData';
import { CreateListingForm } from './CreateListingForm';
import { useNavigate } from 'react-router-dom';
import { TileList } from './TileList';

function CreateListing(props) {
    const navigate = useNavigate();

    const { listings, addListing } = props;

    const [listingName, setListingName] = useState('');
    const [listingType, setListingType] = useState('');
    const [id, setId] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [tools, setTools] = useState([]);
    const [listingCity, setListingCity] = useState('');
    const [listingState, setListingState] = useState('');
    const [isDuplicate, setIsDuplicate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addListing(listingName, listingType, imageUrl, id);
        setListingName('');
        setListingType('');
        setId(id => id+1);
        //navigate(-1); //update this later to point to a success screen e.g. navigate('/success');
    };

    // Using hooks, check for contact name in the contacts array variable in props
    const checkIfDuplicate = (id) => {
        setIsDuplicate(false);
        listings.forEach((listing) => {
            if (listing.id === id) {
                setIsDuplicate(true);
            }
        });
    }

    return (
        <>
            <div>
                <h2>List your tool or entire workspace.</h2>
                <CreateListingForm
                    handleSubmit={handleSubmit}
                    listingName={listingName}
                    setListingName={setListingName}
                    listingType={listingType}
                    setListingType={setListingType}
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                />
            </div>
            <div>
                <h2>Listings are below:</h2>
                <TileList objects={listings} />
            </div>
        </>
    );
}

export default CreateListing;