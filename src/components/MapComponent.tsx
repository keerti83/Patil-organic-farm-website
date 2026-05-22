export default function MapComponent() {
  return (
    <div className="w-full h-full min-h-[400px] rounded-[40px] overflow-hidden border border-brand-earth/30 shadow-xs">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.5126858859103!2d74.4843183737327!3d15.88218954442077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf63feca45aa57%3A0x38968b8e609b16c9!2sPatil%20Organic%20Manure%20%2C%20Earthworms%20And%20Dairy%20Farm!5e0!3m2!1sen!2sin!4v1779449133997!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Patil Organic Manure, Earthworms And Dairy Farm Location"
      />
    </div>
  );
}

