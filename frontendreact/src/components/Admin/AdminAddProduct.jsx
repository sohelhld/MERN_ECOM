// ProductForm.js
import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    //useToast,
} from '@chakra-ui/react';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        images: [
            {
                public_id: "",
                url: ""
            }
        ]
    });

    /// const toast = useToast();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        // try {
        //   // Assuming you have an API endpoint to handle the form submission
        //   const response = await fetch('/api/products', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        //   });

        //   if (response.ok) {
        //     toast({
        //       title: 'Product added successfully!',
        //       status: 'success',
        //       duration: 3000,
        //       isClosable: true,
        //     });
        //     // Clear the form after successful submission
        //     setFormData({
        //       name: '',
        //       description: '',
        //       price: '',
        //       category: '',
        //       stock: '',
        //     });
        //   } else {
        //     toast({
        //       title: 'Error adding product',
        //       status: 'error',
        //       duration: 3000,
        //       isClosable: true,
        //     });
        //   }
        // } catch (error) {
        //   console.error('Error submitting form:', error);
        // }
    };

    return (
        <Box p={8} maxWidth="500px" mx="auto">
            <form onSubmit={handleSubmit}>
                <FormControl id="name">
                    <FormLabel>Product Name</FormLabel>
                    <Input
                        type="text"
                        placeholder="Product Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl id="description">
                    <FormLabel>Product Description</FormLabel>
                    <Textarea
                        placeholder="Product Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl id="price">
                    <FormLabel>Product Price</FormLabel>
                    <Input
                        type="number"
                        placeholder="Product Price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl id="category">
                    <FormLabel>Product Category</FormLabel>
                    <Input
                        type="text"
                        placeholder="Product Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl id="stock">
                    <FormLabel>Product Stock</FormLabel>
                    <Input
                        type="number"
                        placeholder="Product Stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                    />
                </FormControl>

                <Button
                    mt={4}
                    colorScheme="teal"
                    variant="solid"
                    type="submit"
                    _hover={{
                        bg: 'teal.500',
                    }}
                >
                    Add Product
                </Button>
            </form>
        </Box>
    );
};

export default ProductForm;
