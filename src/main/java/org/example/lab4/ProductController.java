package org.example.lab4;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @GetMapping("/products/{productId}")
    public Product getProduct(@PathVariable int productId) {
        return new Product(productId, productId + " name");
    }
}