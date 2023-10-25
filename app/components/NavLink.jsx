import Link from "next/link"

const NavLink = ({ href, title }) => {
    return(
        <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-zinc-600 font-semibold sm:text-xl md:p-0 hover:text-pink-400 border-b border-green-400">
            {title}
        </Link>
    )
}

export default NavLink;