package main

import "fmt"
import "github.com/littldr/openapi-presentation/clientGenerators/go/openapi"

func main()  {
	client := openapi.NewAPIClient(openapi.NewConfiguration());
	dog, _, _ := client.DefaultApi.GetDog(nil, "winnie-the-poodle");
	fmt.Printf("%#v\n", dog);
}