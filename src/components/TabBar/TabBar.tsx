import { RoutesLinkItems, routesLinkItems } from "providers/routes";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { mediaBreakpoints } from "responsive";
import MenuResponsive from "./MenuResponsive";

export const TabBar = () => {
  const { pathname } = useLocation();

  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  const getLink = (item: RoutesLinkItems, key: number) => (
    <Link
      key={key}
      to={item?.path || "/"}
      className={`
        ${pathname === item?.path && "active"}
        flex items-center gap-2 border-b border-b-tabBarBorderColor border-r border-t border-r-tabBarBorderColor border-t-tabBarBgColor bg-tabBarBgColor px-6 py-2 text-base text-textEditorColor
        hover:bg-textEditorHoverBg hover:text-textEditorHoverColor
        [&.active]:border-t-2 [&.active]:border-solid [&.active]:border-b-[none] [&.active]:border-t-tabBarActiveBorderColor [&.active]:bg-tabBarActiveBgColor [&.active]:text-tabBarActiveTextColor`}
    >
      {item.logo}
      {item.title}
    </Link>
  );

  return (
    <header className="relative mt-px flex h-9 w-full items-end justify-between">
      <nav className="flex h-9 flex-row items-center">
        {routesLinkItems.map((item, key) => {
          if (mobileAndTablet) {
            return pathname === item?.path && getLink(item, key);
          }
          return getLink(item, key);
        })}
      </nav>
      <MenuResponsive />
    </header>
  );
};
