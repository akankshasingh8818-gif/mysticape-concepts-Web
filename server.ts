import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory logs for mock databases (contacts, careers) to make them live & reviewable
const contactSubmissions: any[] = [];
const careerSubmissions: any[] = [];

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key === "MY_GEMINI_API_KEY" || key.trim() === "") {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// 1. API: Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// 2. API: AI Luxury Taste Quiz & Style consultation
app.post("/api/consultation", async (req, res) => {
  const { palette, vibe, focus, type, spacesCount, budgetScope } = req.body;

  if (!palette || !vibe || !focus || !type) {
    return res.status(400).json({ error: "Missing required preferences to analyze design profile." });
  }

  const ai = getGeminiClient();

  if (ai) {
    try {
      const prompt = `You are a legendary luxury architectural and interior design principal from "Mysticape Concepts". 
Analyze the client's design preferences and generate a bespoke design profile.
Selected preferences:
- Space/Project Type: ${type}
- Aesthetic Vibe: ${vibe}
- Textural/Palette Preference: ${palette}
- Strategic Detailing Focus: ${focus}
- Space Count / Scale: ${spacesCount || "Not specified"} rooms
- Project Budget Scope: ${budgetScope || "Premium / High-end bespoke"}

Generate a response in JSON format matching this exact schema:
{
  "styleTitle": "A elegant title for their bespoke design style (e.g., 'Travertine Serenity & Brutalist Whisper')",
  "conceptStatement": "A high-end 3-4 sentence narrative summarizing their design soul and structural vision",
  "spacePlanningAdvisory": "Bespoke professional advice on space planning, furniture layout, flow, and visual weight",
  "paletteDetailed": "In-depth description of proposed natural materials (concrete, specific wood species, handwoven textiles, gold/brass metal specifications) to complement their choice",
  "lightingPlan": "Bespoke architectural lighting advisory (such as soft cove washes, concealed ceiling apertures, high-contrast spotlighting, custom monolithic fixtures)",
  "vibeAnalysis": "A short summary of how this vibe impacts mental clarity and luxury residential or commercial experience"
}

Ensure the output is pure JSON. Do not include markdown code blocks.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      const text = response.text || "{}";
      const resultObj = JSON.parse(text);
      return res.json({
        success: true,
        aiPowered: true,
        data: resultObj
      });
    } catch (err: any) {
      console.error("Gemini API call failed, reverting to luxury advisor database.", err);
      // Fall through to database engine
    }
  }

  // Pure luxury curated rule-based fallback if API is unavailable or rate limited
  const FallbackData: Record<string, any> = {
    minimalist: {
      styleTitle: "Alabaster Solitude & Structural Integrity",
      conceptStatement: `A masterclass in quiet luxury. Your profile celebrates the pristine dialogue between soaring negative space, raw monolithic volumes, and double-height ceiling proportions. By prioritizing structural honesty, your custom space frames the landscape as the primary living canvas.`,
      spacePlanningAdvisory: "Incorporate low-profile floating planar dividers rather than floor-to-ceiling solid walls. Keep corridors oversized at 1.8 meters to foster museum-like pacing. Position signature custom curved sofas to anchor the central seating atrium.",
      paletteDetailed: "Utilize porous travertine tiles, warm alabaster plaster washes, wire-brushed Douglas fir, matte charcoal steel, and hand-rubbed brass accents. Textures should be tactile yet matte.",
      lightingPlan: "Sub-ceiling linear LED recessed runaways, highlighting the textural variation of plastered vertical surfaces. Use architectural pinhole spots to pool light on horizontal surfaces without glare.",
      vibeAnalysis: "Promotes deep spatial calm and restorative mental decompression, removing visual noise to inspire creative focus."
    },
    organic: {
      styleTitle: "Monolithic Warmth & Tactile Earthiness",
      conceptStatement: `An interface between nature and architecture. Your taste leans into organic sensuality, layering rich natural stones, cedar woodwork, and softly rounded geometries that feel sculpted directly from the earth. Quiet, luxurious, and grounded.`,
      spacePlanningAdvisory: "Layout follows a radial flow starting around an open-hearth or custom water-basin divider. Doors are flush pivot systems using timber frames to seamlessly partition workspaces from leisure chambers.",
      paletteDetailed: "Honed raw cedar planking, fluted travertine columns, rich olive linen drapes, hand-finished lime plaster walls, rustic terra-cotta slabs, and deep-veined forest quartzite surfaces.",
      lightingPlan: "Incorporate extensive soft floor-level cove wash, framing baseboards to make monolithic partitions appear floating. Warm, sunset-grade color temperatures (2200K - 2700K).",
      vibeAnalysis: "Connects the indoor habitat directly to natural biorhythms, inducing feelings of grounded security and sensory nourishment."
    },
    industrial: {
      styleTitle: "Brutalist Grandeur & Refined Metalwork",
      conceptStatement: `A stunning contrast between industrial strength and soft tactile living. This aesthetic honors raw, exposed cast structural concrete, massive blackened steel beams, and sweeping floor-to-ceiling glass facades, warmed by premium accents.`,
      spacePlanningAdvisory: "Open-plan bento grid layout with structural column placements. Leverage steel-framed glass sliding panels to create flexible zones for quiet reflection and grand hosting.",
      paletteDetailed: "Exposed architectural cast board-form concrete, oxidised steel sheets, textured dark walnut veneers, satin-finished brass handles, and heavy Belgian charcoal wool.",
      lightingPlan: "Splay light upwards onto exposed concrete textures using heavy cast-bronze wall sconces. Suspended architectural track profiles with high color rendering indices.",
      vibeAnalysis: "Bold, modern, and uncompromisingly sophisticated, this profile inspires decisiveness, strength, and creative power."
    },
    classical: {
      styleTitle: "The Neoclassical Revival & Soft Monochromatic Grandeur",
      conceptStatement: `An elegant bridge across centuries. This direction honors symmetrical spatial arrangements, exquisite plaster molding outlines, and monumental axial focal points, distilled through a tailored contemporary monochromatic palette.`,
      spacePlanningAdvisory: "Perfect bilateral symmetry. Align doorways along a main visual axis ('enfilade') to establish cinematic lines of sight across your chambers.",
      paletteDetailed: "Carrara marble sheets, cream lime paint, wire-brushed classic oak flooring in a herringbone pattern, polished brass profiles, and luxurious velvet in deep slate hues.",
      lightingPlan: "Symmetrical plaster cornices containing concealed ambient uplighting. High-end handcrafted minimal glass chandeliers providing a floating, celebratory focal glow.",
      vibeAnalysis: "Communicates exquisite order, legacy, and curated prestige, offering an intellectual framework that honors timeless balance."
    }
  };

  const code = vibe === "Bold Industrial" ? "industrial" :
               vibe === "Organic Warmth" ? "organic" :
               vibe === "Bespoke Classical" ? "classical" : "minimalist";

  const selectedData = FallbackData[code];

  res.json({
    success: true,
    aiPowered: false,
    data: selectedData,
    note: "Curated with Mysticape Concepts rule-engine (Secrets not configured)."
  });
});

// 3. API: Contact Form Submission
app.post("/api/contact", (req, res) => {
  const { name, email, phone, services, projectTimeline, details } = req.body;
  if (!name || !email || !details) {
    return res.status(400).json({ error: "Missing required contact details." });
  }
  const payload = {
    id: `msg_${Date.now()}`,
    name,
    email,
    phone: phone || "N/A",
    services: services || [],
    projectTimeline: projectTimeline || "Flexible",
    details,
    date: new Date().toISOString()
  };
  contactSubmissions.push(payload);
  console.log("New contact request:", payload);
  res.json({ success: true, message: "Thank you for reaching out to Mysticape Concepts. Our design director will contact you shortly.", trackingId: payload.id });
});

// 4. API: Careers Form Submission
app.post("/api/careers", (req, res) => {
  const { name, email, role, portfolio, coverLetter } = req.body;
  if (!name || !email || !role || !coverLetter) {
    return res.status(400).json({ error: "Missing required details for application." });
  }
  const payload = {
    id: `app_${Date.now()}`,
    name,
    email,
    role,
    portfolio: portfolio || "N/A",
    coverLetter,
    date: new Date().toISOString()
  };
  careerSubmissions.push(payload);
  console.log("New Career Application:", payload);
  res.json({ success: true, message: "Application received and submitted to HR.", trackingId: payload.id });
});

// Admin review logs to display inside client panel
app.get("/api/admin/contacts", (req, res) => {
  res.json(contactSubmissions);
});
app.get("/api/admin/careers", (req, res) => {
  res.json(careerSubmissions);
});

// 5. Setup Vite dev-server or Serve static assets for production
const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Mounted Vite development middleware.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static production files from dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error("Error starting dev server:", err);
});
