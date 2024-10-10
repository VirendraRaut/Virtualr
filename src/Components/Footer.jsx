import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <div>
      <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <h3 className="text-md mb-4 font-semibold">Resources</h3>
        <ul>
          {resourcesLinks.map((link,index)=>(
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      </footer>
    </div>
  )
}

export default Footer
