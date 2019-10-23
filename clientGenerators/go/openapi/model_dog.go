/*
 * Dog Management API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi
// Dog struct for Dog
type Dog struct {
	// The id of the dog.
	Id string `json:"id"`
	// The name of the dog.
	Name string `json:"name"`
	// The age of the dog.
	Age float32 `json:"age"`
}
