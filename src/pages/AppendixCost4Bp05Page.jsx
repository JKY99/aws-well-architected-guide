import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST04-BP05 — 데이터 보존 정책 시행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>데이터 보존 정책을 수립하고 시행하면 불필요한 스토리지 비용을 절감하고 규정 준수 요구사항을 충족할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 데이터에 보존 기간이 정의되어 있고, 만료된 데이터가 자동으로 삭제되거나 저비용 스토리지 계층으로 이동됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터를 무기한 보관하여 스토리지 비용이 계속 증가합니다.</li>
        <li>보존 정책 없이 모든 로그, 백업, 스냅샷을 유지합니다.</li>
        <li>접근 빈도와 무관하게 모든 데이터를 동일한 스토리지 계층에 저장합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>불필요한 스토리지 비용이 절감됩니다.</li>
        <li>규정 및 컴플라이언스 요구사항을 충족합니다.</li>
        <li>데이터 관리 복잡성이 줄어듭니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon S3 Lifecycle 정책을 사용하여 데이터를 S3 Standard → S3 IA → S3 Glacier로 자동 이동합니다.</li>
        <li>Amazon S3 Intelligent-Tiering을 사용하여 접근 패턴에 따라 자동으로 계층을 최적화합니다.</li>
        <li>EBS 스냅샷 및 RDS 자동 백업의 보존 기간을 비즈니스 요구에 맞게 설정합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 Lifecycle</li>
        <li>Amazon S3 Intelligent-Tiering</li>
        <li>Amazon S3 Glacier</li>
        <li>AWS Backup</li>
      </ul>
      <PageNav />
    </article>
  );
}
