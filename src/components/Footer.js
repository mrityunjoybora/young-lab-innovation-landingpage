import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import { Instagram, Facebook, WhatsApp } from "@material-ui/icons";

function Footer() {
  return (
    <footer className="py-8 lg:py-10 lg:px-20  px-10 bg-custom-green">
      <div className="flex gap-12 md:justify-evenly items-start mb-4">
        <div className="lg:inline-block hidden">
          <p className="text-gray-600 text-center lg:text-left mt-4 mb-6 ">
            Your friend, your guide and your partner in the journey of parenting
          </p>
          <div className="flex md:justify-start justify-center items-center gap-4">
            <Facebook />
            <Instagram />
            <WhatsApp />
          </div>
          <p className="text-gray-600 text-center md:text-left my-4">
            © {new Date().getFullYear()} All Rights Reserved. Younglabs
          </p>
        </div>
        <div className="list-none">
          <p className="font-medium mb-2">Quick Links</p>
          <li className="my-1 text-gray-600">About</li>
          <li className="my-1 text-gray-600">Privacy Policy</li>
          <li className="my-1 text-gray-600">Terms & Conditions</li>
          <li className="my-1 text-gray-600">Shipping & Delivery</li>
          <li className="my-1 text-gray-600">
            Return, Refunds & Exchange Policy
          </li>
        </div>
        <div>
          <p className="font-medium mb-2">Address</p>
          <div className="flex items-start gap-2 my-2">
            <LocationMarkerIcon className="text-gray-600 h-6 w-6" />
            <p className="text-gray-600">A-39, Sector - 4, Noida -201301</p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <PhoneIcon className="h-5 w-5 text-gray-600" />
            <p className="text-gray-600">( +91) 92890 29696</p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <MailIcon className="h-5 w-5 text-gray-600" />
            <p className="text-gray-600">info@younglabs.in</p>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <p className="text-gray-600 text-center mt-4 mb-6  ">
          Your friend, your guide and your partner in the journey of parenting
        </p>
        <div className="flex justify-center items-center gap-10">
          <Facebook />
          <Instagram />
          <WhatsApp />
        </div>
        <p className="text-gray-600 text-center my-4">
          © {new Date().getFullYear()} All Rights Reserved. Younglabs
        </p>
      </div>
    </footer>
  );
}

export default Footer;
