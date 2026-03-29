import { useState } from "react";
import { Edit, Loader2, MapPin, Link, Plus, Trash2, GraduationCap } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import { useUpdateUserProfileMutation } from "@/redux/features/profile/profileApi";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AdditionalInfoProps {
    profile: any;
    refetch: () => void;
}

export function AdditionalInfoTab({ profile, refetch }: AdditionalInfoProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            bio: profile?.bio || "",
            timeZone: profile?.timeZone || "",
            address: profile?.address || "",
            linkedinUrl: profile?.linkedinUrl || "",
            education: profile?.education?.length > 0 ? profile.education : [{ degree: "", institution: "", passingYear: "", result: "" }],
            dateOfBirth: profile?.dateOfBirth ? new Date(profile.dateOfBirth).toISOString().split('T')[0] : "",
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "education"
    });

    const onSubmit = async (data: any) => {
        try {
            // Format dateOfBirth to full ISO string for backend Zod datetime validation
            const payload = { ...data };
            if (payload.dateOfBirth) {
                payload.dateOfBirth = new Date(payload.dateOfBirth).toISOString();
            } else {
                delete payload.dateOfBirth;
            }

            if (!payload.linkedinUrl) {
                delete payload.linkedinUrl;
            }

            await updateProfile(payload).unwrap();
            toast.success("Additional info updated successfully");
            setIsEditing(false);
            refetch();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to update info");
        }
    };

    return (
        <div className="flex-1 bg-[#060f0a] rounded-2xl border border-primary/20 p-8 flex flex-col shadow-[0_0_40px_hsl(156_70%_42%/0.03)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between border-b border-dashed border-primary/20 pb-6 mb-8">
                <h2 className="text-primary text-2xl font-semibold">Additional Info</h2>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-white/50 hover:text-primary transition-colors"
                >
                    <Edit className="w-5 h-5" />
                </button>
            </div>

            {isEditing ? (
                <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 flex flex-col gap-6 w-full max-w-2xl">
                    <div className="space-y-2">
                        <label className="text-white/70 text-sm">Bio / About Me</label>
                        <textarea
                            {...register("bio")}
                            className="w-full bg-primary/5 border border-primary/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 min-h-[100px]"
                            placeholder="Tell us a little about yourself"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-white/70 text-sm">Date of Birth</label>
                            <Input
                                type="date"
                                {...register("dateOfBirth")}
                                className="bg-primary/5 border-primary/20 text-white"
                            />
                        </div>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-dashed border-primary/20">
                        <h3 className="text-white/90 font-medium">Contact & Links</h3>
                        <div className="space-y-2">
                            <label className="text-white/70 text-sm">Full Address</label>
                            <textarea
                                {...register("address")}
                                className="w-full bg-primary/5 border border-primary/20 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 min-h-[80px]"
                                placeholder="Enter your complete residential address"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-white/70 text-sm">LinkedIn Profile URL</label>
                            <Input
                                type="url"
                                {...register("linkedinUrl")}
                                placeholder="https://linkedin.com/in/username"
                                className="bg-primary/5 border-primary/20 text-white"
                            />
                        </div>
                    </div>

                    <div className="space-y-6 pt-4 border-t border-dashed border-primary/20">
                        <h3 className="text-white/90 font-medium">Educational Background</h3>
                        {fields.map((field, index) => (
                            <div key={field.id} className="p-4 rounded-xl border border-primary/20 bg-primary/5 relative">
                                <button type="button" onClick={() => remove(index)} className="absolute top-4 right-4 text-white/40 hover:text-red-400 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                                <h4 className="text-primary font-medium mb-4">Education #{index + 1}</h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-white/70 text-sm">Degree / Qualification *</label>
                                        <Input
                                            {...register(`education.${index}.degree` as const, { required: "Degree is required" })}
                                            placeholder="e.g. B.Sc in Computer Science"
                                            className="bg-primary/5 border-primary/20 text-white"
                                        />
                                        {(errors.education as any)?.[index]?.degree && <p className="text-red-400 text-xs mt-1">{(errors.education as any)[index]?.degree?.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white/70 text-sm">Institution *</label>
                                        <Input
                                            {...register(`education.${index}.institution` as const, { required: "Institution is required" })}
                                            placeholder="e.g. University of Dhaka"
                                            className="bg-primary/5 border-primary/20 text-white"
                                        />
                                        {(errors.education as any)?.[index]?.institution && <p className="text-red-400 text-xs mt-1">{(errors.education as any)[index]?.institution?.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white/70 text-sm">Passing Year *</label>
                                        <Input
                                            {...register(`education.${index}.passingYear` as const, { required: "Passing year is required" })}
                                            placeholder="e.g. 2023"
                                            className="bg-primary/5 border-primary/20 text-white"
                                        />
                                        {(errors.education as any)?.[index]?.passingYear && <p className="text-red-400 text-xs mt-1">{(errors.education as any)[index]?.passingYear?.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white/70 text-sm">Result / CGPA</label>
                                        <Input
                                            {...register(`education.${index}.result` as const)}
                                            placeholder="e.g. 3.80"
                                            className="bg-primary/5 border-primary/20 text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => append({ degree: "", institution: "", passingYear: "", result: "" })}
                            className="border-primary/20 text-primary hover:bg-primary/10 gap-2 w-full md:w-auto"
                        >
                            <Plus className="w-4 h-4" /> Add Another Degree
                        </Button>
                    </div>

                    <div className="flex justify-end gap-4 mt-4 border-t border-dashed border-primary/20 pt-6">
                        <Button type="button" variant="outline" onClick={() => setIsEditing(false)} className="bg-transparent border-primary/20 text-white hover:bg-white/5">
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary-glow text-white">
                            {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null} Save Changes
                        </Button>
                    </div>
                </form>
            ) : (
                <div className="flex flex-col gap-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                        <div className="col-span-1 md:col-span-2">
                            <p className="text-white/40 text-sm mb-1.5">Bio</p>
                            <p className="text-white font-medium text-[15px] leading-relaxed max-w-3xl whitespace-pre-wrap">
                                {profile?.bio || <span className="text-white/30 italic">Not provided</span>}
                            </p>
                        </div>
                        <div>
                            <p className="text-white/40 text-sm mb-1.5">Date of Birth</p>
                            <p className="text-white font-medium text-[15px]">
                                {profile?.dateOfBirth ? new Date(profile.dateOfBirth).toLocaleDateString() : <span className="text-white/30 italic">Not provided</span>}
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-dashed border-primary/20">
                        <h3 className="text-white/90 text-lg font-medium mb-6">Contact & Links</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-5 bg-primary/5 border border-primary/10 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-sm mb-1.5">Current Address</p>
                                    <p className="text-white font-medium text-[15px] leading-relaxed max-w-2xl">
                                        {profile?.address || <span className="text-white/30 italic">No address provided. Click edit to add your location.</span>}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between p-5 bg-primary/5 border border-primary/10 rounded-xl hover:bg-primary/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#0077b5]/20 flex items-center justify-center flex-shrink-0">
                                        <Link className="w-5 h-5 text-[#0077b5]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-[15px]">LinkedIn Profile</p>
                                        <p className="text-white/40 text-sm">
                                            {profile?.linkedinUrl ? 'Connected' : 'Not linked yet'}
                                        </p>
                                    </div>
                                </div>
                                {profile?.linkedinUrl && (
                                    <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                                        View
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-dashed border-primary/20">
                        <h3 className="text-white/90 text-lg font-medium mb-6">Educational Background</h3>
                        <div className="grid gap-6 max-w-3xl">
                            {profile?.education && profile.education.length > 0 ? (
                                profile.education.map((edu: any, index: number) => (
                                    <div key={index} className="flex gap-4 p-5 rounded-xl border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-colors">
                                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <GraduationCap className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="text-white font-semibold text-lg">{edu.degree}</h3>
                                                <span className="text-primary text-sm font-medium bg-primary/10 px-2 py-0.5 rounded-full">{edu.passingYear}</span>
                                            </div>
                                            <p className="text-white/70 mb-2">{edu.institution}</p>
                                            {edu.result && (
                                                <p className="text-white/50 text-sm">Result: <span className="text-white/90">{edu.result}</span></p>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-primary/20 rounded-xl bg-primary/5">
                                    <GraduationCap className="w-12 h-12 text-primary/40 mb-4" />
                                    <h3 className="text-lg text-white/90 font-medium mb-2">No Education Added</h3>
                                    <p className="text-white/50 max-w-md mb-6">
                                        Add your educational background to complete your profile structure.
                                    </p>
                                    <Button onClick={() => setIsEditing(true)} className="bg-primary hover:bg-primary-glow text-white">
                                        Add Education
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
