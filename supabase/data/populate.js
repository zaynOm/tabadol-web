import data from "./data.json" with { type: "json" };
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

(async () => {
  for (const region of data.regions) {
    const { data: cRegion, error } = await supabase
      .from("regions")
      .insert({ name: region.name })
      .select();
    if (error) return console.log("Region Error: ", error);
    for (const province of region.directions) {
      const { data: cProvince, error } = await supabase
        .from("provinces")
        .insert({ name: province.name, regionId: cRegion[0].id })
        .select();
      if (error) return console.log("Province Error: ", error);
      for (const commune of province.communes) {
        const { data, error } = await supabase
          .from("communes")
          .insert({ name: commune, provinceId: cProvince[0].id })
          .select();
        if (error) return console.log("Communes Error: ", error);
      }
    }
  }
})();
