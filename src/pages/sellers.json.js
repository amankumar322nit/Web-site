export async function getServerSideProps({ res }) {
  try {
    const response = await fetch(
      "https://api.appbroda.com/api/consoleResources?resourceId=sellers.json"
    );
    const { resource } = await response.json();
    if (resource) {
      const { contact_address, contact_email, identifiers, version, content } =
        resource[0];
      const sellersData = {
        contact_address,
        contact_email,
        identifiers,
        version,
        sellers: content.sellers,
      };

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(sellersData));
    }
  } catch (error) {
    console.error("Error fetching sellers data: ", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ message: "Internal server error" }));
  }

  return { props: {} };
}

export default function SellersJson() {
  // This component can be left empty since the response is handled in getServerSideProps
  return null;
}
