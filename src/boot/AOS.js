import { boot } from "quasar/wrappers";
import AOS from "aos";
import "aos/dist/aos.css";

export default boot(({ app }) => {
  // Set AOS instance on app
  app.use(AOS.init());
});

export { AOS };
