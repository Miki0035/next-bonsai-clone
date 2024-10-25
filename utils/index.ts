import { gridTemplateDescriptions } from "@/constants";

export function findTemplateDescriptionById(id: number = 1) {
    return gridTemplateDescriptions.find(templateId => templateId.id === id);
}