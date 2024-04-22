import Link from "next/link"

const NavLink = ({ href, title }) => {
    return(
        <>
        <Link
            href={'/projects'}
            className="block py-2 pl-3 pr-4 text-dark font-semibold sm:text-xl md:p-0 hover:text-primary border-b border-primary">
            Projects

        </Link><Link
            href={'/resume'}
            className="block py-2 pl-3 pr-4 text-dark font-semibold sm:text-xl md:p-0 hover:text-primary border-b border-primary">
                Resume

            </Link></>
        
    )
}
export default NavLink;