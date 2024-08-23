import { footerLinks } from "@/_constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <div className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col md:w-full flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center gap-4 flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p className="text-base text-gray-700 flex">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
        Todos os direitos reservados &copy;
      </p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Política de Privacidade
        </Link>
        <Link href="/" className="text-gray-500">
          Termos e Condições
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
