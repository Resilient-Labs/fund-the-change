import { Form, FormControl, Button } from "react-bootstrap";

const Search = () => {
  const HandleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.previousSibling.value;
    console.log("you searched for: ", searchInput);

    fetch("/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: searchInput,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });

    // window.location.replace(`/OrganizationSearch/${searchInput}`);
  };

  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" onClick={HandleSearch}>
        Search Organization
      </Button>
    </Form>
  );
};

export default Search;
