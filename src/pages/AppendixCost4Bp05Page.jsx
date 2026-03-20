import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST04-BP05 — 데이터 보존 정책 적용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>데이터 보존 기간을 정의하고 적용합니다. 보존 기간이 지난 데이터를 자동으로 삭제하거나 더 저렴한 스토리지 계층으로 이동합니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 보존 정책이 자동으로 적용되어 스토리지 비용이 최적화됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터가 무기한 저장되어 스토리지 비용이 계속 증가합니다.</li>
        <li>보존 기간이 지난 데이터를 수동으로 관리합니다.</li>
        <li>모든 데이터를 동일한 스토리지 계층에 저장합니다.</li>
        <li>법적 또는 컴플라이언스 요구사항에 맞는 보존 정책이 없습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>스토리지 비용이 최적화됩니다.</li>
        <li>규정 준수 요구사항이 자동으로 충족됩니다.</li>
        <li>데이터 관리 부담이 감소합니다.</li>
        <li>오래된 데이터가 적절히 아카이브됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>S3 수명 주기 정책: 객체를 시간에 따라 자동으로 다른 스토리지 클래스로 전환하거나 삭제합니다.</li>
        <li>Intelligent-Tiering 활용: 접근 패턴에 따라 자동으로 최적의 스토리지 계층으로 이동합니다.</li>
        <li>EBS 스냅샷 정책: 오래된 EBS 스냅샷을 자동으로 삭제하는 정책을 설정합니다.</li>
        <li>CloudWatch Logs 보존: 로그 그룹에 보존 기간을 설정하여 오래된 로그를 자동 삭제합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 Lifecycle Policies</li>
        <li>S3 Intelligent-Tiering</li>
        <li>Amazon S3 Glacier</li>
        <li>Amazon EBS</li>
        <li>Amazon CloudWatch Logs</li>
      </ul>
      <PageNav />
    </article>
  );
}
