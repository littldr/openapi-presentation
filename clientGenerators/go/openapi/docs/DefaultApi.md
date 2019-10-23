# \DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDog**](DefaultApi.md#CreateDog) | **Post** /dogs | Create new dog
[**GetDog**](DefaultApi.md#GetDog) | **Get** /dogs/{dogId} | Fetch dog information by the dog&#39;s name



## CreateDog

> Dog CreateDog(ctx, optional)

Create new dog

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***CreateDogOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a CreateDogOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dog** | [**optional.Interface of Dog**](Dog.md)| The dog to create | 

### Return type

[**Dog**](Dog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDog

> Dog GetDog(ctx, dogId)

Fetch dog information by the dog's name

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dogId** | **string**|  | 

### Return type

[**Dog**](Dog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

