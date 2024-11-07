import React, { useState } from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel, TextareaAutosize, Button, FormHelperText, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import './OrderDetails.css';

const OrderDetails = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = ["Technology", "Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Entertainment", "Transportation", "Construction", "Agriculture"];
  const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "Wyoming"];
  const countries = ["United States", "Canada"];

  const accessKey = "84f4b57c-fe6d-4728-bb25-802d9951943c";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      setIsLoading(false);
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
      setIsLoading(false);
    },
  });

  const handleFormSubmit = (data) => {
    setIsLoading(true);
    onSubmit(data);
  };

  return (
    <div className="order-details-container">
      <h2 className="formheading" id="contact-info-heading">Contact Information</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} id="order-details-form">
        <TextField 
          label="Email" 
          name="email" 
          fullWidth 
          id="email"
          className="form-input"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField 
          label="First Name" 
          name="firstName" 
          fullWidth 
          id="firstName"
          className="form-input"
          {...register("firstName", { required: "First name is required" })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField 
          label="Last Name" 
          name="lastName" 
          fullWidth 
          id="lastName"
          className="form-input"
          {...register("lastName", { required: "Last name is required" })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <TextField 
          label="Phone Number" 
          name="phone" 
          fullWidth 
          id="phone"
          className="form-input"
          {...register("phone", { 
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits"
            }
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <h2 className="formheading" id="company-info-heading">Company Information</h2>
        <TextField 
          label="Desired Company Name" 
          name="companyName" 
          fullWidth 
          id="companyName"
          className="form-input"
          {...register("companyName", { required: "Company name is required" })}
        />
        <TextField 
          label="Alternative Name" 
          name="alternativeName" 
          fullWidth 
          id="alternativeName"
          className="form-input"
          {...register("alternativeName", { required: "Alternative name is required" })}
        />

        <h2 id="business-category-heading">Business Category</h2>
        <FormControl fullWidth id="category-select" className="form-input">
          <InputLabel>Category</InputLabel>
          <Select 
            name="category" 
            {...register("category", { required: "Category is required" })}
            id="category"
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
          {errors.category && <FormHelperText error>{errors.category.message}</FormHelperText>}
        </FormControl>
        
        <TextareaAutosize
          minRows={4}
          placeholder="Business Description"
          name="description"
          {...register("description", { required: "Description is required" })}
          style={{ width: '100%', marginTop: '1em' }}
          id="business-description"
          className="form-input"
        />

        <h2 className="formheading" id="business-address-heading">Business Address</h2>
        <FormControl fullWidth id="country-select" className="form-input">
          <InputLabel>Country</InputLabel>
          <Select name="country" {...register("country", { required: "Country is required" })} id="country">
            {countries.map((country) => (
              <MenuItem key={country} value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField 
          label="Address Line 1" 
          name="address1" 
          fullWidth 
          id="address1"
          className="form-input"
          {...register("address1", { required: "Address Line 1 is required" })}
        />
        <TextField 
          label="Address Line 2" 
          name="address2" 
          fullWidth 
          id="address2"
          className="form-input"
          {...register("address2", { required: "Address Line 2 is required" })}
        />
        <TextField 
          label="City" 
          name="city" 
          fullWidth 
          id="city"
          className="form-input"
          {...register("city", { required: "City is required" })}
        />
        <FormControl fullWidth id="state-select" className="form-input">
          <InputLabel>State</InputLabel>
          <Select name="state" {...register("state", { required: "State is required" })} id="state">
            {states.map((state) => (
              <MenuItem key={state} value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField 
          label="ZIP Code" 
          name="zip" 
          fullWidth 
          id="zip"
          className="form-input"
          {...register("zip", { required: "ZIP code is required" })}
        />

        <h2 className="formheading" id="member-info-heading">Member Information</h2>
        <TextField 
          label="Member First Name" 
          name="memberFirstName" 
          fullWidth 
          id="memberFirstName"
          className="form-input"
          {...register("memberFirstName", { required: "Member first name is required" })}
        />
        <TextField 
          label="Member Last Name" 
          name="memberLastName" 
          fullWidth 
          id="memberLastName"
          className="form-input"
          {...register("memberLastName", { required: "Member last name is required" })}
        />
        <FormControl fullWidth id="member-country-select" className="form-input">
          <InputLabel>Member Country</InputLabel>
          <Select name="memberCountry" {...register("memberCountry", { required: "Member country is required" })} id="memberCountry">
            {countries.map((country) => (
              <MenuItem key={country} value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField 
          label="Member Address Line 1" 
          name="memberAddress1" 
          fullWidth 
          id="memberAddress1"
          className="form-input"
          {...register("memberAddress1", { required: "Member address line 1 is required" })}
        />
        <TextField 
          label="Member Address Line 2" 
          name="memberAddress2" 
          fullWidth 
          id="memberAddress2"
          className="form-input"
          {...register("memberAddress2", { required: "Member address line 2 is required" })}
        />
        <TextField 
          label="Member City" 
          name="memberCity" 
          fullWidth 
          id="memberCity"
          className="form-input"
          {...register("memberCity", { required: "Member city is required" })}
        />
        <FormControl fullWidth id="member-state-select" className="form-input">
          <InputLabel>Member State</InputLabel>
          <Select name="memberState" {...register("memberState", { required: "Member state is required" })} id="memberState">
            {states.map((state) => (
              <MenuItem key={state} value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField 
          label="Member ZIP Code" 
          name="memberZip" 
          fullWidth 
          id="memberZip"
          className="form-input"
          {...register("memberZip", { required: "Member ZIP code is required" })}
        />
        <TextField 
          label="Percent Ownership" 
          name="percentOwnership" 
          fullWidth 
          type="number" 
          id="percentOwnership"
          className="form-input"
          {...register("percentOwnership", { required: "Percent ownership is required" })}
        />
        <TextField 
          label="Item Contributed" 
          name="itemContributed" 
          fullWidth 
          id="itemContributed"
          className="form-input"
          {...register("itemContributed", { required: "Item contributed is required" })}
        />
        <TextField 
          label="Item Contributed Market Value" 
          name="itemMarketValue" 
          fullWidth 
          type="number" 
          id="itemMarketValue"
          className="form-input"
          {...register("itemMarketValue", { required: "Item market value is required" })}
        />

        <Button type="submit" variant="contained" color="primary" disabled={isLoading} id="submit-button">
          {isLoading ? <CircularProgress size={24} /> : "Submit"}
        </Button>
      </form>

      {result && (
        <div>
          {isSuccess ? (
            <p style={{ color: 'green' }}>Success: {result}</p>
          ) : (
            <p style={{ color: 'red' }}>Error: {result}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
