import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2024 Copyright{" "}
            <a
              className="font-bold"
              href="https://portifolio-matheusformentin.netlify.app"
            >
              Matheus Formentin
            </a>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer

// <span className="font-bold">FSW Barber</span>
