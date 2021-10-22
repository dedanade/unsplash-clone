/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as UNSPLASH_LOGO } from '../my_unsplash_logo.svg';
import { ReactComponent as SEARCH_ICON } from '../search_white.svg';
import { ReactComponent as ADD_ICON } from '../add_circle_white.svg';
import isUrl from 'is-url-superb';

function Unplash(props) {
  const PHOTOS = [
    {
      img: 'https://images.unsplash.com/photo-1634695141943-38b47a2ba9c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      label: 'Snow',
    },
    {
      img: 'https://images.unsplash.com/photo-1634813904910-5ba81f8b90ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80',
      label: 'Crabs',
    },
    {
      img: 'https://images.unsplash.com/photo-1634824301333-7648114c30f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80',
      label: 'Keyboard',
    },
    {
      img: 'https://images.unsplash.com/photo-1634750089642-49e19037b78d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80',
      label: 'Jellyfish',
    },
    {
      img: 'https://images.unsplash.com/photo-1634777132153-15322f198aff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      label: 'Nature',
    },
    {
      img: 'https://images.unsplash.com/photo-1632624011013-baf2251f5de0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=429&q=80',
      label: 'Dead Alive',
    },
    {
      img: 'https://images.unsplash.com/photo-1634774002696-ea23eea550cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      label: 'Night Life',
    },
    {
      img: 'https://images.unsplash.com/photo-1634719061749-3f902eb1ccaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80',
      label: 'Indoor',
    },
    {
      img: 'https://images.unsplash.com/photo-1634724746558-3ed7bbab968b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      label: 'Fashion',
    },
    {
      img: 'https://images.unsplash.com/photo-1634769799973-46bce20171ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      label: 'Bridge',
    },
    {
      img: 'https://images.unsplash.com/photo-1634643698545-4822a601cdc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80',
      label: 'Architecture',
    },
    {
      img: 'https://images.unsplash.com/photo-1634732271252-c6a81379a7ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      label: 'Nature',
    },
    {
      img: 'https://images.unsplash.com/photo-1634768291716-4f1fa5cea55d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',
      label: 'WorkSpace',
    },
    {
      img: 'https://images.unsplash.com/photo-1634662520507-c10261a3cf57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      label: 'Architecture',
    },
  ];
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();
  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);
  const [showDeletePhotoModal, setShowDeletePhotoModal] = useState(false);
  const [photos, setPhotos] = useState(null);
  const [allPhotos, setAllPhotos] = useState(null);
  const [deletePhoto, setDeletePhoto] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!photos) {
      setPhotos(PHOTOS);
      setAllPhotos(PHOTOS);
    }
  }, []);

  const onSubmit = (data) => {
    if (!isUrl(data.photoLink)) {
      setError('photoLink', {
        type: 'notImage',
      });
    } else {
      setTimeout(() => {
        setPhotos((oldPhotos) => [
          { img: data.photoLink, label: data.labelInput },
          ...oldPhotos,
        ]);
      }, 500);
      setShowAddPhotoModal(false);
    }
  };

  const onDeletePhoto = () => {
    const oldPhotos = [...photos];
    setShowDeletePhotoModal(false);
    const newPhotos = photos.filter((p) => {
      return p !== deletePhoto;
    });
    setTimeout(() => {
      setPhotos(newPhotos);
    }, 500);

    try {
      // Process on the Server
    } catch (error) {
      setPhotos(oldPhotos);
    }
  };

  const handleSearchOnchange = (value) => {
    setSearchValue(value);
    if (value.length > 1) {
      const newValue = value.toLowerCase();
      const newPhotos = allPhotos?.filter((p) => {
        return p.label.toLowerCase().includes(newValue);
      });
      if (newPhotos) setPhotos(newPhotos);
    } else {
      setPhotos(allPhotos);
    }
  };

  if (!photos) return null;
  return (
    <Fragment>
      <div className='container'>
        <header className='header__container'>
          <div className='logo-search__card'>
            <UNSPLASH_LOGO />
            <div className='input search-input-card'>
              <SEARCH_ICON />
              <input
                className='search__input'
                type='text'
                placeholder='Search by name'
                value={searchValue}
                onChange={(e) => handleSearchOnchange(e.currentTarget.value)}
              />
            </div>
          </div>
          <button
            onClick={() => setShowAddPhotoModal(true)}
            className='btn add-photo__btn'
          >
            Add a Photo
          </button>
          <button
            onClick={() => setShowAddPhotoModal(true)}
            className='btn add-photo__span'
          >
            <ADD_ICON />
          </button>
        </header>
        <div className='all-photos-container'>
          {photos?.length ? (
            <ul className='all-photos__ul'>
              {photos.map((photo, i) => {
                return (
                  <li className='all-photos__li' key={i}>
                    <div className='label-delete__container'>
                      <button
                        onClick={() => [
                          setDeletePhoto(photo),
                          setShowDeletePhotoModal(true),
                        ]}
                        className='btn label-delete__btn'
                      >
                        delete
                      </button>
                      <p className='label-delete__p'>{photo.label}</p>
                    </div>
                    <img src={photo.img} alt={photo.label} />
                  </li>
                );
              })}
            </ul>
          ) : searchValue.length ? (
            <h1 style={{ textAlign: 'center' }}>
              No Photos With that search result
            </h1>
          ) : (
            <h1 style={{ textAlign: 'center' }}>No Photos to show</h1>
          )}
        </div>
        {showAddPhotoModal && (
          <form onSubmit={handleSubmit(onSubmit)} className='modal-container'>
            <div className='modal-body'>
              <p className='modal-title'>Add a new Photo</p>
              <div>
                <div style={{ marginBottom: '30px' }}>
                  <label htmlFor='labelInput' className='form-control'>
                    Label
                  </label>
                  <input
                    {...register('labelInput', {
                      required: true,
                      minLength: 3,
                    })}
                    type='text'
                    name='labelInput'
                    id='labelInput'
                    className='form-control'
                    placeholder='Suspendisse elit massa'
                  />
                  {errors.labelInput &&
                    errors.labelInput.type === 'required' && (
                      <span className='error-msg-span'>Label is Required</span>
                    )}
                  {errors.labelInput &&
                    errors.labelInput.type === 'minLength' && (
                      <span className='error-msg-span'>
                        Label is must be at least 3 words
                      </span>
                    )}
                </div>
                <div>
                  <label htmlFor='photoLink' className='form-control'>
                    Photo URL
                  </label>
                  <input
                    {...register('photoLink', {
                      required: true,
                      minLength: 3,
                    })}
                    type='text'
                    name='photoLink'
                    id='photoLink'
                    className='form-control'
                    placeholder='https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'
                  />
                  {errors.photoLink && errors.photoLink.type === 'required' && (
                    <span className='error-msg-span'>
                      Photo Link is Required
                    </span>
                  )}
                  {errors.photoLink &&
                    errors.photoLink.type === 'minLength' && (
                      <span className='error-msg-span'>
                        Photo Link is must be at least 3 words
                      </span>
                    )}
                  {errors.photoLink && errors.photoLink.type === 'notImage' && (
                    <span className='error-msg-span'>
                      Photo Link must be an Image
                    </span>
                  )}
                </div>
              </div>
              <div className='form-button'>
                <button
                  onClick={() => setShowAddPhotoModal(false)}
                  className='btn btn-cancel'
                >
                  Cancel
                </button>
                <button type='submit' className='btn btn-submit'>
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
        {showDeletePhotoModal && (
          <div className='modal-container'>
            <div className='modal-body'>
              <p className='modal-title'>Are you sure?</p>
              <form onSubmit={handleSubmit(onDeletePhoto)}>
                <label htmlFor='passwordInput' className='form-control'>
                  Password
                </label>
                <input
                  {...register('passwordInput', {
                    required: true,
                    minLength: 3,
                  })}
                  type='password'
                  name='passwordInput'
                  id='passwordInput'
                  className='form-control'
                  placeholder=''
                />
                {errors.passwordInput &&
                  errors.passwordInput.type === 'required' && (
                    <span className='error-msg-span'>Password is Required</span>
                  )}
                {errors.passwordInput &&
                  errors.passwordInput.type === 'minLength' && (
                    <span className='error-msg-span'>
                      Password must be at least 3 words
                    </span>
                  )}
                <div className='form-button'>
                  <button
                    onClick={() => [
                      setDeletePhoto(null),
                      setShowDeletePhotoModal(false),
                    ]}
                    className='btn btn-cancel'
                  >
                    Cancel
                  </button>
                  <button type='submit' className='btn btn-delete'>
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        <a
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
          href='https://github.com/dedanade'
        >
          Created by Daniel
        </a>
      </div>
    </Fragment>
  );
}

export default Unplash;
